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
* The definition of a Docker image that can be used for a Bitbucket Pipelines step execution context.
*/
export class PipelineImage {
    /**
    * The name of the image. If the image is hosted on DockerHub the short name can be used, otherwise the fully qualified name is required here.
    */
    'name'?: string;
    /**
    * The username needed to authenticate with the Docker registry. Only required when using a private Docker image.
    */
    'username'?: string;
    /**
    * The password needed to authenticate with the Docker registry. Only required when using a private Docker image.
    */
    'password'?: string;
    /**
    * The email needed to authenticate with the Docker registry. Only required when using a private Docker image.
    */
    'email'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PipelineImage.attributeTypeMap;
    }
}

