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

import { User } from './user';

/**
* Details about a component with a count of the issues it contains.
*/
export class ComponentWithIssueCount {
    /**
    * Count of issues for the component.
    */
    'issueCount'?: number;
    /**
    * Not used.
    */
    'projectId'?: number;
    /**
    * The key of the project to which the component is assigned.
    */
    'project'?: string;
    /**
    * The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee.
    */
    'realAssignee'?: User;
    /**
    * Indicates whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.
    */
    'isAssigneeTypeValid'?: boolean;
    /**
    * The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:   *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.  *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.  *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.  *  `PROJECT_DEFAULT` when none of the preceding cases are true.
    */
    'realAssigneeType'?: ComponentWithIssueCount.RealAssigneeTypeEnum;
    /**
    * The description for the component.
    */
    'description'?: string;
    /**
    * The user details for the component\'s lead user.
    */
    'lead'?: User;
    /**
    * The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Takes the following values:   *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.  *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.  *  `UNASSIGNED` an assignee is not set for issues created with this component.  *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.
    */
    'assigneeType'?: ComponentWithIssueCount.AssigneeTypeEnum;
    /**
    * The URL for this count of the issues contained in the component.
    */
    'self'?: string;
    /**
    * The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component.
    */
    'assignee'?: User;
    /**
    * The name for the component.
    */
    'name'?: string;
    /**
    * The unique identifier for the component.
    */
    'id'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "issueCount",
            "baseName": "issueCount",
            "type": "number"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "realAssignee",
            "baseName": "realAssignee",
            "type": "User"
        },
        {
            "name": "isAssigneeTypeValid",
            "baseName": "isAssigneeTypeValid",
            "type": "boolean"
        },
        {
            "name": "realAssigneeType",
            "baseName": "realAssigneeType",
            "type": "ComponentWithIssueCount.RealAssigneeTypeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "lead",
            "baseName": "lead",
            "type": "User"
        },
        {
            "name": "assigneeType",
            "baseName": "assigneeType",
            "type": "ComponentWithIssueCount.AssigneeTypeEnum"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "assignee",
            "baseName": "assignee",
            "type": "User"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComponentWithIssueCount.attributeTypeMap;
    }
}

export namespace ComponentWithIssueCount {
    export enum RealAssigneeTypeEnum {
        PROJECTDEFAULT = <any> 'PROJECT_DEFAULT',
        COMPONENTLEAD = <any> 'COMPONENT_LEAD',
        PROJECTLEAD = <any> 'PROJECT_LEAD',
        UNASSIGNED = <any> 'UNASSIGNED'
    }
    export enum AssigneeTypeEnum {
        PROJECTDEFAULT = <any> 'PROJECT_DEFAULT',
        COMPONENTLEAD = <any> 'COMPONENT_LEAD',
        PROJECTLEAD = <any> 'PROJECT_LEAD',
        UNASSIGNED = <any> 'UNASSIGNED'
    }
}
