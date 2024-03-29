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


/**
* A Webhook subscription.
*/
export class WebhookSubscriptionAllOf {
    /**
    * The webhook\'s id
    */
    'uuid'?: string;
    /**
    * The URL events get delivered to.
    */
    'url'?: string;
    /**
    * A user-defined description of the webhook.
    */
    'description'?: string;
    /**
    * The type of entity, which is `repository` in the case of webhook subscriptions on repositories.
    */
    'subjectType'?: WebhookSubscriptionAllOf.SubjectTypeEnum;
    'subject'?: object;
    'active'?: boolean;
    'createdAt'?: Date;
    /**
    * The events this webhook is subscribed to.
    */
    'events'?: Array<WebhookSubscriptionAllOf.EventsEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "subjectType",
            "baseName": "subject_type",
            "type": "WebhookSubscriptionAllOf.SubjectTypeEnum"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "object"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<WebhookSubscriptionAllOf.EventsEnum>"
        }    ];

    static getAttributeTypeMap() {
        return WebhookSubscriptionAllOf.attributeTypeMap;
    }
}

export namespace WebhookSubscriptionAllOf {
    export enum SubjectTypeEnum {
        User = <any> 'user',
        Repository = <any> 'repository',
        Team = <any> 'team'
    }
    export enum EventsEnum {
        Pullrequestunapproved = <any> 'pullrequest:unapproved',
        IssuecommentCreated = <any> 'issue:comment_created',
        Pullrequestapproved = <any> 'pullrequest:approved',
        Repocreated = <any> 'repo:created',
        Repodeleted = <any> 'repo:deleted',
        Repoimported = <any> 'repo:imported',
        PullrequestcommentUpdated = <any> 'pullrequest:comment_updated',
        Issueupdated = <any> 'issue:updated',
        Projectupdated = <any> 'project:updated',
        PullrequestcommentCreated = <any> 'pullrequest:comment_created',
        RepocommitStatusUpdated = <any> 'repo:commit_status_updated',
        Pullrequestupdated = <any> 'pullrequest:updated',
        Issuecreated = <any> 'issue:created',
        Repofork = <any> 'repo:fork',
        PullrequestcommentDeleted = <any> 'pullrequest:comment_deleted',
        RepocommitStatusCreated = <any> 'repo:commit_status_created',
        Repoupdated = <any> 'repo:updated',
        Pullrequestrejected = <any> 'pullrequest:rejected',
        Pullrequestfulfilled = <any> 'pullrequest:fulfilled',
        Repopush = <any> 'repo:push',
        Pullrequestcreated = <any> 'pullrequest:created',
        Repotransfer = <any> 'repo:transfer',
        RepocommitCommentCreated = <any> 'repo:commit_comment_created'
    }
}
