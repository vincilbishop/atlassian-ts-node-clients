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

import { AccountAllOf } from './accountAllOf';
import { AccountAllOfLinks } from './accountAllOfLinks';
import { ModelObject } from './modelObject';

export class Account extends ModelObject {
    'links'?: AccountAllOfLinks;
    'username'?: string;
    /**
    * Account name defined by the owner. Should be used instead of the \"username\" field. Note that \"nickname\" cannot be used in place of \"username\" in URLs and queries, as \"nickname\" is not guaranteed to be unique.
    */
    'nickname'?: string;
    /**
    * The status of the account. Currently the only possible value is \"active\", but more values may be added in the future.
    */
    'accountStatus'?: string;
    'displayName'?: string;
    'website'?: string;
    'createdOn'?: Date;
    'uuid'?: string;
    'has2faEnabled'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "links",
            "type": "AccountAllOfLinks"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "accountStatus",
            "baseName": "account_status",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        },
        {
            "name": "createdOn",
            "baseName": "created_on",
            "type": "Date"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        },
        {
            "name": "has2faEnabled",
            "baseName": "has_2fa_enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Account.attributeTypeMap);
    }
}

