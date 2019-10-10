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

import { EntityProperty } from './entityProperty';
import { FieldUpdateOperation } from './fieldUpdateOperation';
import { HistoryMetadata } from './historyMetadata';
import { IssueTransition } from './issueTransition';

/**
* Details of an issue update request.
*/
export class IssueUpdateDetails extends null<String, object> {
    /**
    * Details of a transition. Required when performing a transition, optional when creating or editing an issue.
    */
    'transition'?: IssueTransition;
    /**
    * List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`.
    */
    'fields'?: { [key: string]: object; };
    /**
    * List of operations to perform on issue screen fields. Note that fields included in here cannot be included in `fields`.
    */
    'update'?: { [key: string]: Array<FieldUpdateOperation>; };
    /**
    * Additional issue history details.
    */
    'historyMetadata'?: HistoryMetadata;
    /**
    * Details of issue properties to be add or update.
    */
    'properties'?: Array<EntityProperty>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transition",
            "baseName": "transition",
            "type": "IssueTransition"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "update",
            "baseName": "update",
            "type": "{ [key: string]: Array<FieldUpdateOperation>; }"
        },
        {
            "name": "historyMetadata",
            "baseName": "historyMetadata",
            "type": "HistoryMetadata"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<EntityProperty>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IssueUpdateDetails.attributeTypeMap);
    }
}
