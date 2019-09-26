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

import { Repository } from './repository';
import { User } from './user';

/**
* A user\'s permission for a given repository.
*/
export class RepositoryPermission {
    'type': string;
    'permission'?: RepositoryPermission.PermissionEnum;
    'user'?: User;
    'repository'?: Repository;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "permission",
            "baseName": "permission",
            "type": "RepositoryPermission.PermissionEnum"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "User"
        },
        {
            "name": "repository",
            "baseName": "repository",
            "type": "Repository"
        }    ];

    static getAttributeTypeMap() {
        return RepositoryPermission.attributeTypeMap;
    }
}

export namespace RepositoryPermission {
    export enum PermissionEnum {
        Admin = <any> 'admin',
        Write = <any> 'write',
        Read = <any> 'read'
    }
}