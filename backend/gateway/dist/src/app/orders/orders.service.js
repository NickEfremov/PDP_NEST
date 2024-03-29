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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const orders_domain_service_1 = require("./orders.domain.service");
const microservices_1 = require("@nestjs/microservices");
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./order.entity");
const rxjs_1 = require("rxjs");
let OrdersService = class OrdersService {
    constructor(ordersDomainService, natsClient, dataSource) {
        this.ordersDomainService = ordersDomainService;
        this.natsClient = natsClient;
        this.dataSource = dataSource;
    }
    async createOrder(data) {
        await this.dataSource.manager.transaction(async (transactionalEntityManager) => {
            const newOrder = new order_entity_1.Order();
            Object.assign(newOrder, data);
            await transactionalEntityManager.save(newOrder);
        }).then(() => {
            this.sendNewOrderToFabrics(data.car);
        });
        return await (0, rxjs_1.lastValueFrom)(this.natsClient.send('GET_ORDER_STATUS', data.car)).then((completedCar) => {
            return this.findAndSave(completedCar);
        });
    }
    async sendNewOrderToFabrics(car) {
        await this.natsClient.emit('CREATE_CAR', car);
        console.log('GATEWAY ---> Send car name: ', car);
    }
    async findAndSave(car) {
        let order = await this.ordersDomainService.findOneByCarAsync(car.toString());
        order.isExecuted = true;
        order.status = "executed";
        order.completeAt = new Date();
        await this.ordersDomainService.update(order.id, order);
        return order;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('NATS_SERVICE')),
    __metadata("design:paramtypes", [orders_domain_service_1.OrdersDomainService,
        microservices_1.ClientProxy,
        typeorm_1.DataSource])
], OrdersService);
//# sourceMappingURL=orders.service.js.map