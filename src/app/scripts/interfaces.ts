import _ from "lodash";
declare global {
    interface Window {
        [key: string]: any;
    }
    interface Navigator {
        camera: any
        notification: any
        device: any
        splashscreen: any
    }
    var device, cordova, Media, StatusBar, Camera, CameraPopoverOptions, CameraPopoverHandle;
    var _: _;
}
// Appery.io models
export interface $aio_empty_object {};
//
export interface UserModel {
    "address": string,
    "dateOfBirth": string,
    "lastName": string,
    "phone": string,
    "firstName": string,
    "gender": string,
    "email": string,
    "photo": string,
    "job": string
}
export interface MessagesModel_0 extends Array < MessageModel_0 > {}
export interface MessageModel {
    "message": string,
    "name": string,
    "time": string,
    "avatar": string,
    "title": string
}
export interface MessagesModel extends Array < MessageModel > {}
export interface MessageModel_0 {
    "me": boolean,
    "message": string,
    "time": string
}
//
export interface FileReadServiceResponse {
    "data": any
}
//
interface __GetCitiesResponse_sub_001 {
    "name": string
}
export interface GetCitiesResponse extends Array < __GetCitiesResponse_sub_001 > {}