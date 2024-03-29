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


/**
* A Bitbucket Pipelines PAUSED stage of a pipeline that is in progress.
*/
export class PipelineStateInProgressPausedAllOf {
    /**
    * The name of the stage (PAUSED)
    */
    'name'?: PipelineStateInProgressPausedAllOf.NameEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "PipelineStateInProgressPausedAllOf.NameEnum"
        }    ];

    static getAttributeTypeMap() {
        return PipelineStateInProgressPausedAllOf.attributeTypeMap;
    }
}

export namespace PipelineStateInProgressPausedAllOf {
    export enum NameEnum {
        PAUSED = <any> 'PAUSED'
    }
}
