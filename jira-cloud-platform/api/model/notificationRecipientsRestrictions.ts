/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GroupName } from './groupName';
import { RestrictedPermission } from './restrictedPermission';

/**
* Details of the group membership or permissions needed to receive the notification.
*/
export class NotificationRecipientsRestrictions {
    /**
    * List of group memberships required to receive the notification.
    */
    'groups'?: Array<GroupName>;
    /**
    * List of permissions required to receive the notification.
    */
    'permissions'?: Array<RestrictedPermission>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<GroupName>"
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<RestrictedPermission>"
        }    ];

    static getAttributeTypeMap() {
        return NotificationRecipientsRestrictions.attributeTypeMap;
    }
}

