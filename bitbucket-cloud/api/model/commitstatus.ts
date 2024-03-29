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

import { CommitstatusAllOf } from './commitstatusAllOf';
import { CommitstatusAllOfLinks } from './commitstatusAllOfLinks';
import { ModelObject } from './modelObject';

export class Commitstatus extends ModelObject {
    'links'?: CommitstatusAllOfLinks;
    /**
    * The commit status\' id.
    */
    'uuid'?: string;
    /**
    * An identifier for the status that\'s unique to         its type (current \"build\" is the only supported type) and the vendor,         e.g. BB-DEPLOY
    */
    'key'?: string;
    /**
    *  The name of the ref that pointed to this commit at the time the status object was created. Note that this the ref may since have moved off of the commit. This optional field can be useful for build systems whose build triggers and configuration are branch-dependent (e.g. a Pipeline build). It is legitimate for this field to not be set, or even apply (e.g. a static linting job).
    */
    'refname'?: string;
    /**
    * A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. Accepts context variables `repository` and `commit` that Bitbucket will evaluate at runtime whenever at runtime. For example, one could use https://foo.com/builds/{repository.full_name} which Bitbucket will turn into https://foo.com/builds/foo/bar at render time.
    */
    'url'?: string;
    /**
    * Provides some indication of the status of this commit
    */
    'state'?: Commitstatus.StateEnum;
    /**
    * An identifier for the build itself, e.g. BB-DEPLOY-1
    */
    'name'?: string;
    /**
    * A description of the build (e.g. \"Unit tests in Bamboo\")
    */
    'description'?: string;
    'createdOn'?: Date;
    'updatedOn'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "links",
            "type": "CommitstatusAllOfLinks"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "refname",
            "baseName": "refname",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "Commitstatus.StateEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
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
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Commitstatus.attributeTypeMap);
    }
}

export namespace Commitstatus {
    export enum StateEnum {
        SUCCESSFUL = <any> 'SUCCESSFUL',
        FAILED = <any> 'FAILED',
        INPROGRESS = <any> 'INPROGRESS',
        STOPPED = <any> 'STOPPED'
    }
}
