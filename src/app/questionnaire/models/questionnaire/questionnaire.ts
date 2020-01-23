import { Question } from '../question/question';

export class Questionnaire {
    'id': number;
    'questionList': Question[];
    'name': string;
    'qType': string;
    'accountIdList': number[];
    'editPrivacy': string[];
    'viewPrivacy': string[];

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
