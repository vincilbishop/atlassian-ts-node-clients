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

import { PipelineError } from './pipelineError';
import { PipelineStateCompletedErrorAllOf } from './pipelineStateCompletedErrorAllOf';
import { PipelineStateCompletedResult } from './pipelineStateCompletedResult';

export class PipelineStateCompletedError {
    'type': string;
    /**
    * The name of the result (ERROR)
    */
    'name'?: PipelineStateCompletedError.NameEnum;
    'error'?: PipelineError;

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
            "type": "PipelineStateCompletedError.NameEnum"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "PipelineError"
        }    ];

    static getAttributeTypeMap() {
        return PipelineStateCompletedError.attributeTypeMap;
    }
}

export namespace PipelineStateCompletedError {
    export enum NameEnum {
        ERROR = <any> 'ERROR'
    }
}
