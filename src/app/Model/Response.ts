import { DataResponse } from "./DataResponse";

export class Response {
    code!: number;
    status!: String;
    data!: DataResponse;
}