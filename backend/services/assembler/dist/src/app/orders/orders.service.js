"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const createOrder_dto_1 = require("./dto/createOrder.dto");
const orders_domain_service_1 = require("./orders.domain.service");
const order_entity_1 = require("./order.entity");
const typeorm_1 = require("typeorm");
let OrdersService = class OrdersService {
    constructor(ordersDomainService, dataSource) {
        this.ordersDomainService = ordersDomainService;
        this.dataSource = dataSource;
    }
    createNewOrder(car) {
        console.log(`ASSEMBLER ---> Create new order, ->DB: ${car}`);
        let data = new createOrder_dto_1.CreateOrderDto();
        data.car = car;
        this.ordersDomainService.createOrder(data).then(() => {
            console.log(`ASSEMBLER ---> Created new order: ${car}`);
        });
    }
    async receiveItem(msg) {
        await this.ordersDomainService.findOneByCar(msg.carName).then(order => {
            this.dataSource.manager.transaction("READ COMMITTED", async (transactionalEntityManager) => {
                switch (msg.item) {
                    case 'body':
                        await transactionalEntityManager.update(order_entity_1.Order, { id: order.id }, { id: order.id, body: true });
                        break;
                    case 'engine':
                        await transactionalEntityManager.update(order_entity_1.Order, { id: order.id }, { id: order.id, engine: true });
                        break;
                    case 'transmission':
                        await transactionalEntityManager.update(order_entity_1.Order, { id: order.id }, { id: order.id, transmission: true });
                        break;
                    case 'suspension':
                        await transactionalEntityManager.update(order_entity_1.Order, { id: order.id }, { id: order.id, suspension: true });
                        break;
                }
            }).then(() => this.checkCarIsReady(order.id));
        });
    }
    async checkCarIsReady(id) {
        const order = await this.ordersDomainService.findOne(id);
        if (order.engine && order.body && order.transmission && order.suspension) {
            order.isExecuted = true;
            order.status = "executed";
            order.completeAt = new Date();
            await this.ordersDomainService.update(order.id, order).then(() => {
                console.log(`ASSEMBLER ---> CREATED: ${order.car}`);
            });
        }
    }
    async getCompletedOrder(car) {
        let order;
        let counter = 0;
        while (counter < 5) {
            order = await this.ordersDomainService.findOneByCarAsync(car);
            if (order?.isExecuted) {
                return order.car;
            }
            await new Promise(resolve => setTimeout(resolve, 200));
            counter++;
        }
        console.log(`ASSEMBLER  ERROR ---> ORDER NOT FOUND`);
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [orders_domain_service_1.OrdersDomainService,
        typeorm_1.DataSource])
], OrdersService);
//# sourceMappingURL=orders.service.js.map