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
exports.OrdersDomainService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./order.entity");
let OrdersDomainService = class OrdersDomainService {
    constructor(ordersRepository) {
        this.ordersRepository = ordersRepository;
    }
    findAll() {
        return this.ordersRepository.find();
    }
    findOne(orderId) {
        return this.ordersRepository.findOne({ where: { id: orderId } });
    }
    findOneByCar(car) {
        return this.ordersRepository.findOneBy({ car: car });
    }
    async findOneByCarAsync(car) {
        return await this.ordersRepository.findOneBy({ car: car });
    }
    async update(id, order) {
        return await this.ordersRepository.update(id, order);
    }
    async remove(id) {
        await this.ordersRepository.delete(id);
    }
    async createOrder(createOrderDto) {
        const newOrder = new order_entity_1.Order();
        Object.assign(newOrder, createOrderDto);
        return await this.ordersRepository.save(newOrder);
    }
};
exports.OrdersDomainService = OrdersDomainService;
exports.OrdersDomainService = OrdersDomainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrdersDomainService);
//# sourceMappingURL=orders.domain.service.js.map