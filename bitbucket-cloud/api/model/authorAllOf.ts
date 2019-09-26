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

/**
* The author of a change in a repository
*/
export class AuthorAllOf {
    /**
    * The raw author value from the repository. This may be the only value available if the author does not match a user in Bitbucket.
    */
    'raw'?: string;
    'user'?: Account;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "raw",
            "baseName": "raw",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "Account"
        }    ];

    static getAttributeTypeMap() {
        return AuthorAllOf.attributeTypeMap;
    }
}

