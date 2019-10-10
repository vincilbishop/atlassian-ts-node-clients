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
* A list of webhooks.
*/
export class WebhookDetails {
    /**
    * The JQL filter that specifies which issues the webhook is sent for. Only a subset of JQL can be used. The supported elements are:   *  Fields: `issueKey`, `project`, `issuetype`, `status`, `assignee`, `reporter`, `issue.property`, and `cf[id]` (for custom fields—only the epic label custom field is supported).  *  Operators: `=`, `!=`, `IN`, and `NOT IN`.
    */
    'jqlFilter': string;
    /**
    * The Jira events that trigger the webhook.
    */
    'events'?: Array<WebhookDetails.EventsEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jqlFilter",
            "baseName": "jqlFilter",
            "type": "string"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<WebhookDetails.EventsEnum>"
        }    ];

    static getAttributeTypeMap() {
        return WebhookDetails.attributeTypeMap;
    }
}

export namespace WebhookDetails {
    export enum EventsEnum {
        JiraissueCreated = <any> 'jira:issue_created',
        JiraissueUpdated = <any> 'jira:issue_updated',
        JiraissueDeleted = <any> 'jira:issue_deleted',
        CommentCreated = <any> 'comment_created',
        CommentUpdated = <any> 'comment_updated',
        CommentDeleted = <any> 'comment_deleted'
    }
}