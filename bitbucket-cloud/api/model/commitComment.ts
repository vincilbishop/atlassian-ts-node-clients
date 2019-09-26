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

import { Comment } from './comment';
import { CommentAllOfInline } from './commentAllOfInline';
import { CommentAllOfLinks } from './commentAllOfLinks';
import { Commit } from './commit';
import { CommitCommentAllOf } from './commitCommentAllOf';
import { IssueAllOfContent } from './issueAllOfContent';
import { User } from './user';

export class CommitComment {
    'type': string;
    'id'?: number;
    'createdOn'?: Date;
    'updatedOn'?: Date;
    'content'?: IssueAllOfContent;
    'user'?: User;
    'deleted'?: boolean;
    'parent'?: Comment;
    'inline'?: CommentAllOfInline;
    'links'?: CommentAllOfLinks;
    'commit'?: Commit;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "created_on",
            "type": "Date"
        },
        {
            "name": "updatedOn",
            "baseName": "updated_on",
            "type": "Date"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "IssueAllOfContent"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "User"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "Comment"
        },
        {
            "name": "inline",
            "baseName": "inline",
            "type": "CommentAllOfInline"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "CommentAllOfLinks"
        },
        {
            "name": "commit",
            "baseName": "commit",
            "type": "Commit"
        }    ];

    static getAttributeTypeMap() {
        return CommitComment.attributeTypeMap;
    }
}

