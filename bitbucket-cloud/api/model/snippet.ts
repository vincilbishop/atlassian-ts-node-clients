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

import { Account } from './account';
import { ModelObject } from './modelObject';
import { SnippetAllOf } from './snippetAllOf';

export class Snippet extends ModelObject {
    'id'?: number;
    'title'?: string;
    /**
    * The DVCS used to store the snippet.
    */
    'scm'?: Snippet.ScmEnum;
    'createdOn'?: Date;
    'updatedOn'?: Date;
    'owner'?: Account;
    'creator'?: Account;
    'isPrivate'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "scm",
            "baseName": "scm",
            "type": "Snippet.ScmEnum"
        },
        {
            "name": "createdOn",
            "baseName": "created_on",
            "type": "Date"
        },
        {
            "name": "updatedOn",
            "baseName": "updated_on",
            "type": "Date"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "Account"
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "Account"
        },
        {
            "name": "isPrivate",
            "baseName": "is_private",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Snippet.attributeTypeMap);
    }
}

export namespace Snippet {
    export enum ScmEnum {
        Hg = <any> 'hg',
        Git = <any> 'git'
    }
}
