export interface WpTermRest {
	id: number;
	count: number;
	description: string;
	link: string;
	name: string;
	slug: string;
	taxonomy: string;
	meta: Array<any>;
	acf?: any;
	_links: any;
}

export interface WpPostRest {
	_links: any;
	acf?: any;
	author: number;
	categories?: Array<any>;
	comment_status: string;
	content: {
		raw: string;
		rendered: string;
		protected: boolean;
		block_version: number;
	};
	date: string;
	date_gmt: string;
	excerpt: { raw: string; rendered: string; protected: boolean };
	featured_media: number;
	generated_slug: string;
	guid: { raw: string; rendered: string };
	id: number;
	lang?: string;
	link: string;
	menu_order: number;
	meta: any;
	modified: string;
	modified_gmt: string;
	parent: number;
	password: string;
	permalink_template: string;
	ping_status: string;
	slug: string;
	status: string;
	tags?: Array<any>;
	template: string;
	title: { raw: string; rendered: string };
	translations?: any;
	translations_table?: any;
	type: string;
}

export interface WpMediaRest {
	id: number;
	date: string;
	date_gmt: string;
	guid: {
		rendered: string;
	};
	modified: string;
	modified_gmt: string;
	slug: string;
	status: string;
	type: string;
	link: string;
	title: { rendered: string };
	author: number;
	comment_status: string;
	ping_status: string;
	template: string;
	meta: any;
	acf?: any;
	yoast_head?: string;
	yoast_head_json?: any;
	lang?: string;
	translations?: any;
	pll_sync_post?: [];
	description: { rendered: string };
	caption: { rendered: string };
	alt_text: string;
	media_type: string;
	mime_type: string;
	media_details: {
		width: number;
		height: number;
		file: string;
		sizes: any;
		image_meta: any;
	};
	post: number;
	source_url: string;
	_links: any;
}

export interface CoreSelector {
	canUser: Function;
	canUserEditEntityRecord: Function;
	getAuthors: Function;
	getAutosave: Function;
	getAutosaves: Function;
	getBlockPatternCategories: Function;
	getBlockPatterns: Function;
	getCurrentTheme: Function;
	getCurrentUser: Function;
	getEditedEntityRecord: Function;
	getEmbedPreview: Function;
	getEntitiesByKind: Function;
	getEntitiesConfig: Function;
	getEntity: Function;
	getEntityConfig: Function;
	getEntityRecord: Function;
	getEntityRecordEdits: Function;
	getEntityRecordNonTransientEdits: Function;
	getEntityRecords: Function;
	getLastEntityDeleteError: Function;
	getLastEntitySaveError: Function;
	getPostTypes: Function;
	getRawEntityRecord: Function;
	getRedoEdit: Function;
	getReferenceByDistinctEdits: Function;
	getThemeSupports: Function;
	getUndoEdit: Function;
	getUserQueryResults: Function;
	hasEditsForEntityRecord: Function;
	hasEntityRecords: Function;
	hasFetchedAutosaves: Function;
	hasRedo: Function;
	hasUndo: Function;
	isAutosavingEntityRecord: Function;
	isDeletingEntityRecord: Function;
	isPreviewEmbedFallback: Function;
	isRequestingEmbedPreview: Function;
	isSavingEntityRecord: Function;
}

export interface CoreDispatcher {
	addEntities: Function;
	deleteEntityRecord: Function;
	editEntityRecord: Function;
	receiveEntityRecords: Function;
	receiveThemeSupports: Function;
	receiveUploadPermissions: Function;
	redo: Function;
	saveEditedEntityRecord: Function;
	saveEntityRecord: Function;
	undo: Function;
}

export interface CoreBlockEditorSelector {
	areInnerBlocksControlled: Function;
	canEditBlock: Function;
	canInsertBlocks: Function;
	canInsertBlockType: Function;
	canLockBlockType: Function;
	canMoveBlock: Function;
	canMoveBlocks: Function;
	canRemoveBlock: Function;
	canRemoveBlocks: Function;
	didAutomaticChange: Function;
	getAdjacentBlockClientId: Function;
	getAllowedBlocks: Function;
	getBlock: Function;
	getBlockAttributes: Function;
	getBlockCount: Function;
	getBlockHierarchyRootClientId: Function;
	getBlockIndex: Function;
	getBlockInsertionPoint: Function;
	getBlockListSettings: Function;
	getBlockMode: Function;
	getBlockName: Function;
	getBlockNamesByClientId: Function;
	getBlockOrder: Function;
	getBlockParents: Function;
	getBlockParentsByBlockName: Function;
	getBlockRootClientId: Function;
	getBlocks: Function;
	getBlocksByClientId: Function;
	getBlockSelectionEnd: Function;
	getBlockSelectionStart: Function;
	getBlockTransformItems: Function;
	getClientIdsOfDescendants: Function;
	getClientIdsWithDescendants: Function;
	getDraggedBlockClientIds: Function;
	getFirstMultiSelectedBlockClientId: Function;
	getGlobalBlockCount: Function;
	getInserterItems: Function;
	getLastMultiSelectedBlockClientId: Function;
	getLowestCommonAncestorWithSelectedBlock: Function;
	getMultiSelectedBlockClientIds: Function;
	getMultiSelectedBlocks: Function;
	getMultiSelectedBlocksEndClientId: Function;
	getMultiSelectedBlocksStartClientId: Function;
	getNextBlockClientId: Function;
	getPatternsByBlockTypes: Function;
	getPreviousBlockClientId: Function;
	getSelectedBlock: Function;
	getSelectedBlockClientId: Function;
	getSelectedBlockClientIds: Function;
	getSelectedBlockCount: Function;
	getSelectedBlocksInitialCaretPosition: Function;
	getSelectionEnd: Function;
	getSelectionStart: Function;
	getSettings: Function;
	getTemplate: Function;
	getTemplateLock: Function;
	hasBlockMovingClientId: Function;
	hasDraggedInnerBlock: Function;
	hasInserterItems: Function;
	hasMultiSelection: Function;
	hasSelectedBlock: Function;
	hasSelectedInnerBlock: Function;
	isAncestorBeingDragged: Function;
	isAncestorMultiSelected: Function;
	isBlockBeingDragged: Function;
	isBlockHighlighted: Function;
	isBlockInsertionPointVisible: Function;
	isBlockMultiSelected: Function;
	isBlockSelected: Function;
	isBlockValid: Function;
	isBlockVisible: Function;
	isBlockWithinSelection: Function;
	isCaretWithinFormattedText: Function;
	isDraggingBlocks: Function;
	isFirstMultiSelectedBlock: Function;
	isLastBlockChangePersistent: Function;
	isMultiSelecting: Function;
	isNavigationMode: Function;
	isSelectionEnabled: Function;
	isTyping: Function;
	isValidTemplate: Function;
	wasBlockJustInserted: Function;
}

export interface CoreBlockEditorDispatcher {
	clearSelectedBlock: Function;
	duplicateBlocks: Function;
	enterFormattedText: Function;
	exitFormattedText: Function;
	flashBlock: Function;
	hideInsertionPoint: Function;
	insertAfterBlock: Function;
	insertBeforeBlock: Function;
	insertBlock: Function;
	insertBlocks: Function;
	insertDefaultBlock: Function;
	mergeBlocks: Function;
	moveBlocksDown: Function;
	moveBlocksToPosition: Function;
	moveBlocksUp: Function;
	moveBlockToPosition: Function;
	multiSelect: Function;
	receiveBlocks: Function;
	removeBlock: Function;
	removeBlocks: Function;
	replaceBlock: Function;
	replaceBlocks: Function;
	replaceInnerBlocks: Function;
	resetBlocks: Function;
	resetSelection: Function;
	selectBlock: Function;
	selectionChange: Function;
	selectNextBlock: Function;
	selectPreviousBlock: Function;
	setBlockMovingClientId: Function;
	setBlockVisibility: Function;
	setHasControlledInnerBlocks: Function;
	setNavigationMode: Function;
	setTemplateValidity: Function;
	showInsertionPoint: Function;
	startDraggingBlocks: Function;
	startMultiSelect: Function;
	startTyping: Function;
	stopDraggingBlocks: Function;
	stopMultiSelect: Function;
	stopTyping: Function;
	synchronizeTemplate: Function;
	toggleBlockHighlight: Function;
	toggleBlockMode: Function;
	toggleSelection: Function;
	updateBlock: Function;
	updateBlockAttributes: Function;
	updateBlockListSettings: Function;
	updateSettings: Function;
	validateBlocksToTemplate: Function;
}

export interface CoreBlocksSelector {
	getActiveBlockVariation: Function;
	getBlockStyles: Function;
	getBlockSupport: Function;
	getBlockType: Function;
	getBlockTypes: Function;
	getBlockVariations: Function;
	getCategories: Function;
	getChildBlockNames: Function;
	getCollections: Function;
	getDefaultBlockName: Function;
	getDefaultBlockVariation: Function;
	getFreeformFallbackBlockName: Function;
	getGroupingBlockName: Function;
	getUnregisteredFallbackBlockName: Function;
	hasBlockSupport: Function;
	hasChildBlocks: Function;
	hasChildBlocksWithInserterSupport: Function;
	isMatchingSearchTerm: Function;
}
export interface CoreBlocksDispatcher {}

export interface CoreEditorSelector {
	canInsertBlockType: Function;
	canUserUseUnfilteredHTML: Function;
	didPostSaveRequestFail: Function;
	didPostSaveRequestSucceed: Function;
	getActivePostLock: Function;
	getAdjacentBlockClientId: Function;
	getAutosaveAttribute: Function;
	getBlock: Function;
	getBlockAttributes: Function;
	getBlockCount: Function;
	getBlockHierarchyRootClientId: Function;
	getBlockIndex: Function;
	getBlockInsertionPoint: Function;
	getBlockListSettings: Function;
	getBlockMode: Function;
	getBlockName: Function;
	getBlockOrder: Function;
	getBlockRootClientId: Function;
	getBlocks: Function;
	getBlocksByClientId: Function;
	getBlockSelectionEnd: Function;
	getBlockSelectionStart: Function;
	getClientIdsOfDescendants: Function;
	getClientIdsWithDescendants: Function;
	getCurrentPost: Function;
	getCurrentPostAttribute: Function;
	getCurrentPostId: Function;
	getCurrentPostLastRevisionId: Function;
	getCurrentPostRevisionsCount: Function;
	getCurrentPostType: Function;
	getEditedPostAttribute: Function;
	getEditedPostContent: Function;
	getEditedPostPreviewLink: Function;
	getEditedPostSlug: Function;
	getEditedPostVisibility: Function;
	getEditorBlocks: Function;
	getEditorSelection: Function;
	getEditorSelectionEnd: Function;
	getEditorSelectionStart: Function;
	getEditorSettings: Function;
	getFirstMultiSelectedBlockClientId: Function;
	getGlobalBlockCount: Function;
	getInserterItems: Function;
	getLastMultiSelectedBlockClientId: Function;
	getMultiSelectedBlockClientIds: Function;
	getMultiSelectedBlocks: Function;
	getMultiSelectedBlocksEndClientId: Function;
	getMultiSelectedBlocksStartClientId: Function;
	getNextBlockClientId: Function;
	getPermalink: Function;
	getPermalinkParts: Function;
	getPostEdits: Function;
	getPostLockUser: Function;
	getPostTypeLabel: Function;
	getPreviousBlockClientId: Function;
	getSelectedBlock: Function;
	getSelectedBlockClientId: Function;
	getSelectedBlockCount: Function;
	getSelectedBlocksInitialCaretPosition: Function;
	getStateBeforeOptimisticTransaction: Function;
	getSuggestedPostFormat: Function;
	getTemplate: Function;
	getTemplateLock: Function;
	hasChangedContent: Function;
	hasEditorRedo: Function;
	hasEditorUndo: Function;
	hasInserterItems: Function;
	hasMultiSelection: Function;
	hasNonPostEntityChanges: Function;
	hasSelectedBlock: Function;
	hasSelectedInnerBlock: Function;
	inSomeHistory: Function;
	isAncestorMultiSelected: Function;
	isAutosavingPost: Function;
	isBlockInsertionPointVisible: Function;
	isBlockMultiSelected: Function;
	isBlockSelected: Function;
	isBlockValid: Function;
	isBlockWithinSelection: Function;
	isCaretWithinFormattedText: Function;
	isCleanNewPost: Function;
	isCurrentPostPending: Function;
	isCurrentPostPublished: Function;
	isCurrentPostScheduled: Function;
	isDeletingPost: Function;
	isEditedPostAutosaveable: Function;
	isEditedPostBeingScheduled: Function;
	isEditedPostDateFloating: Function;
	isEditedPostDirty: Function;
	isEditedPostEmpty: Function;
	isEditedPostNew: Function;
	isEditedPostPublishable: Function;
	isEditedPostSaveable: Function;
	isFirstMultiSelectedBlock: Function;
	isMultiSelecting: Function;
	isPermalinkEditable: Function;
	isPostAutosavingLocked: Function;
	isPostLocked: Function;
	isPostLockTakeover: Function;
	isPostSavingLocked: Function;
	isPreviewingPost: Function;
	isPublishingPost: Function;
	isPublishSidebarEnabled: Function;
	isSavingNonPostEntityChanges: Function;
	isSavingPost: Function;
	isSelectionEnabled: Function;
	isTyping: Function;
	isValidTemplate: Function;
}

export interface CoreEditorDispatcher {
	autosave: Function;
	clearSelectedBlock: Function;
	createUndoLevel: Function;
	disablePublishSidebar: Function;
	editPost: Function;
	enablePublishSidebar: Function;
	enterFormattedText: Function;
	exitFormattedText: Function;
	hideInsertionPoint: Function;
	insertBlock: Function;
	insertBlocks: Function;
	insertDefaultBlock: Function;
	lockPostAutosaving: Function;
	lockPostSaving: Function;
	mergeBlocks: Function;
	moveBlocksDown: Function;
	moveBlocksUp: Function;
	moveBlockToPosition: Function;
	multiSelect: Function;
	receiveBlocks: Function;
	redo: Function;
	refreshPost: Function;
	removeBlock: Function;
	removeBlocks: Function;
	replaceBlock: Function;
	replaceBlocks: Function;
	resetBlocks: Function;
	resetEditorBlocks: Function;
	resetPost: Function;
	savePost: Function;
	selectBlock: Function;
	setTemplateValidity: Function;
	setupEditor: Function;
	setupEditorState: Function;
	showInsertionPoint: Function;
	startMultiSelect: Function;
	startTyping: Function;
	stopMultiSelect: Function;
	stopTyping: Function;
	synchronizeTemplate: Function;
	toggleBlockMode: Function;
	toggleSelection: Function;
	trashPost: Function;
	undo: Function;
	unlockPostAutosaving: Function;
	unlockPostSaving: Function;
	updateBlock: Function;
	updateBlockAttributes: Function;
	updateBlockListSettings: Function;
	updateEditorSettings: Function;
	updatePost: Function;
	updatePostLock: Function;
}
