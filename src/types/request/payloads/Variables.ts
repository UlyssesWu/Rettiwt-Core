/* eslint-disable */

/**
 * Mandatory variables that must be sent as a URL-encoded, stringified-JSON.
 *
 * @public
 */
export interface IVariables {
	tweetId?: string;
	focalTweetId?: string;
	userId?: string;
	listId?: string;
	screen_name?: string;
	count?: number;
	cursor?: string;
	rawQuery?: string;
	tweet_text?: string;
	product: string;
	includePromotedContent: boolean;
	referrer: string;
	withBirdwatchNotes: boolean;
	withCommunity: boolean;
	withDownvotePerspective: boolean;
	withQuickPromoteEligibilityTweetFields: boolean;
	withReactionsMetadata: boolean;
	withReactionsPerspective: boolean;
	withSuperFollowsTweetFields: boolean;
	withSuperFollowsUserFields: boolean;
	withV2Timeline: boolean;
	withVoice: boolean;
	with_rux_injections: boolean;
	withClientEventToken: boolean;

	/** @returns The string representation of 'this' data. */
	toString(): string;
}
