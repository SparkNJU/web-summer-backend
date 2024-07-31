"use strict";
// src/app/model/user.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const core_1 = require("@midwayjs/core");
const bcrypt = require("bcryptjs");
let UserModel = class UserModel {
    async hashPassword(password) {
        return bcrypt.hash(password, 10);
    }
    async comparePassword(plainPassword, hashedPassword) {
        return bcrypt.compare(plainPassword, hashedPassword);
    }
};
UserModel = __decorate([
    (0, core_1.Provide)()
], UserModel);
exports.UserModel = UserModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3QkFBd0I7Ozs7Ozs7OztBQUV4Qix5Q0FBeUM7QUFDekMsbUNBQW1DO0FBRzVCLElBQU0sU0FBUyxHQUFmLE1BQU0sU0FBUztJQUNwQixLQUFLLENBQUMsWUFBWSxDQUFDLFFBQWdCO1FBQ2pDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsYUFBcUIsRUFBRSxjQUFzQjtRQUNqRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRixDQUFBO0FBUlksU0FBUztJQURyQixJQUFBLGNBQU8sR0FBRTtHQUNHLFNBQVMsQ0FRckI7QUFSWSw4QkFBUyJ9