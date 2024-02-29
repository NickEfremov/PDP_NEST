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
exports.CarcassSubscriber = void 0;
const typeorm_1 = require("typeorm");
const carcass_entity_1 = require("../carcass.entity");
const messaging_service_1 = require("../../messaging/messaging.service");
let CarcassSubscriber = class CarcassSubscriber {
    constructor(dataSource, messagingService) {
        this.messagingService = messagingService;
        dataSource.subscribers.push(this);
    }
    listenTo() {
        return carcass_entity_1.Carcass;
    }
    afterUpdate(event) {
        this.messagingService.sendCarcassToAssembler(event.entity.car).then();
    }
};
exports.CarcassSubscriber = CarcassSubscriber;
exports.CarcassSubscriber = CarcassSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        messaging_service_1.MessagingService])
], CarcassSubscriber);
//# sourceMappingURL=carcass.subscriber.js.map