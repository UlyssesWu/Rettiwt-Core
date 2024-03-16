// ENUMS
import { EMediaResources, ETweetResources } from '../enums/Resources';

/**
 * Collection of resources that require a numeric id.
 *
 * @internal
 */
export const requireNumericId = [ETweetResources.FAVORITE_TWEET, ETweetResources.CREATE_RETWEET];

/**
 * Collection of resources that require upload args.
 *
 * @internal
 */
export const requireUploadArgs = [
	EMediaResources.MEDIA_UPLOAD_APPEND,
	EMediaResources.MEDIA_UPLOAD_FINALIZE,
	EMediaResources.MEDIA_UPLOAD_INIT,
];
