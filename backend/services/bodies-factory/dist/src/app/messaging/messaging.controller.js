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
exports.MessagingController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const carcasses_service_1 = require("../carcass/carcasses.service");
let MessagingController = class MessagingController {
    constructor(carcassesService) {
        this.carcassesService = carcassesService;
    }
    async createBody(msg) {
        console.log(`CARCASS ---> Receive new order: ${msg}`);
        this.carcassesService.createNewCarcass(msg);
    }
};
exports.MessagingController = MessagingController;
__decorate([
    (0, microservices_1.EventPattern)('CREATE_CAR'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessagingController.prototype, "createBody", null);
exports.MessagingController = MessagingController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [carcasses_service_1.CarcassesService])
], MessagingController);
//# sourceMappingURL=messaging.controller.js.map