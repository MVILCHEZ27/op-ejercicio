import { CharacterResult } from "./CharacterResult";

export class DataResponse {
    offset!: number;
    limit!: number;
    results!: CharacterResult;
}