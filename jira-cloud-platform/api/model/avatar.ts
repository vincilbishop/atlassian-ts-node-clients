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


/**
* Details of an avatar.
*/
export class Avatar {
    /**
    * The ID of the avatar. Required when setting the project avatar.
    */
    'id'?: string;
    /**
    * The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the accountId for a user.
    */
    'owner'?: string;
    /**
    * Indicates whether the avatar is a system avatar.
    */
    'isSystemAvatar'?: boolean;
    /**
    * Indicates whether the avatar is used in Jira. For example, shown as a project\'s avatar.
    */
    'isSelected'?: boolean;
    /**
    * Indicates whether the avatar can be deleted.
    */
    'isDeletable'?: boolean;
    /**
    * The file name of the avatar icon. Returned for system avatars.
    */
    'fileName'?: string;
    /**
    * The list of avatar icon URLs.
    */
    'urls'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string"
        },
        {
            "name": "isSystemAvatar",
            "baseName": "isSystemAvatar",
            "type": "boolean"
        },
        {
            "name": "isSelected",
            "baseName": "isSelected",
            "type": "boolean"
        },
        {
            "name": "isDeletable",
            "baseName": "isDeletable",
            "type": "boolean"
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return Avatar.attributeTypeMap;
    }
}

