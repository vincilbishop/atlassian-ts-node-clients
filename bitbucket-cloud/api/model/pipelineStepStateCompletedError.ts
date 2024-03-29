/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PipelineStepError } from './pipelineStepError';
import { PipelineStepStateCompletedErrorAllOf } from './pipelineStepStateCompletedErrorAllOf';
import { PipelineStepStateCompletedResult } from './pipelineStepStateCompletedResult';

export class PipelineStepStateCompletedError {
    'type': string;
    /**
    * The name of the result (ERROR)
    */
    'name'?: PipelineStepStateCompletedError.NameEnum;
    'error'?: PipelineStepError;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "PipelineStepStateCompletedError.NameEnum"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "PipelineStepError"
        }    ];

    static getAttributeTypeMap() {
        return PipelineStepStateCompletedError.attributeTypeMap;
    }
}

export namespace PipelineStepStateCompletedError {
    export enum NameEnum {
        ERROR = <any> 'ERROR'
    }
}
