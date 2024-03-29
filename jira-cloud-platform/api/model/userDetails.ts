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

import { AvatarUrlsBean } from './avatarUrlsBean';

/**
* User details.
*/
export class UserDetails {
    /**
    * The URL of the user.
    */
    'self'?: string;
    /**
    * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    */
    'name'?: string;
    /**
    * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    */
    'key'?: string;
    /**
    * The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    */
    'accountId'?: string;
    /**
    * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
    */
    'emailAddress'?: string;
    /**
    * The avatars of the user.
    */
    'avatarUrls'?: AvatarUrlsBean;
    /**
    * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
    */
    'displayName'?: string;
    /**
    * Whether the user is active.
    */
    'active'?: boolean;
    /**
    * The time zone specified in the user\'s profile. Depending on the user’s privacy settings, this may be returned as null.
    */
    'timeZone'?: string;
    /**
    * The type of account represented by this user. This will be one of \'atlassian\' (normal users), \'app\' (application user) or \'customer\' (Jira Service Desk customer user)
    */
    'accountType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "avatarUrls",
            "baseName": "avatarUrls",
            "type": "AvatarUrlsBean"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserDetails.attributeTypeMap;
    }
}

