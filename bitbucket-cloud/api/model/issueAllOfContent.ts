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


export class IssueAllOfContent {
    /**
    * The text as it was typed by a user.
    */
    'raw'?: string;
    /**
    * The type of markup language the raw content is to be interpreted in.
    */
    'markup'?: IssueAllOfContent.MarkupEnum;
    /**
    * The user\'s content rendered as HTML.
    */
    'html'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "raw",
            "baseName": "raw",
            "type": "string"
        },
        {
            "name": "markup",
            "baseName": "markup",
            "type": "IssueAllOfContent.MarkupEnum"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IssueAllOfContent.attributeTypeMap;
    }
}

export namespace IssueAllOfContent {
    export enum MarkupEnum {
        Markdown = <any> 'markdown',
        Creole = <any> 'creole',
        Plaintext = <any> 'plaintext'
    }
}