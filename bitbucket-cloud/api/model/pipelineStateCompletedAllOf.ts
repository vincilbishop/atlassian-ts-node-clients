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

import { PipelineStateCompletedResult } from './pipelineStateCompletedResult';

/**
* A Bitbucket Pipelines COMPLETED pipeline state.
*/
export class PipelineStateCompletedAllOf {
    /**
    * The name of pipeline state (COMPLETED).
    */
    'name'?: PipelineStateCompletedAllOf.NameEnum;
    'result'?: PipelineStateCompletedResult;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "PipelineStateCompletedAllOf.NameEnum"
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "PipelineStateCompletedResult"
        }    ];

    static getAttributeTypeMap() {
        return PipelineStateCompletedAllOf.attributeTypeMap;
    }
}

export namespace PipelineStateCompletedAllOf {
    export enum NameEnum {
        COMPLETED = <any> 'COMPLETED'
    }
}
