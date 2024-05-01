<?php

use SUPT\Types\Type;

class Gift extends Type {
  /**
   * Constants
   */
  const NAME = 'gift';
  const GRAPHQL_TYPE_NAME = 'Gift';

  /**
   * Bind all you action & filter hooks in here.
   */
  function __construct() {
    parent::__construct();
  }

  function register() {
    register_post_type(self::NAME, [
			'labels' => [
				'name'                  => __( 'Gifts', 'supt' ),
				'singular_name'         => __( 'Gift', 'supt' ),
				'menu_name'             => __( 'Gifts', 'supt' ),
				'name_admin_bar'        => __( 'Gift', 'supt' ),
				'archives'              => __( 'Gift Archives', 'supt' ),
				'attributes'            => __( 'Gift Attributes', 'supt' ),
				'parent_item_colon'     => __( 'Parent Gift', 'supt' ),
				'all_items'             => __( 'All Gifts', 'supt' ),
				'add_new_item'          => __( 'Add New Gift', 'supt' ),
				'add_new'               => __( 'Add New', 'supt' ),
				'new_item'              => __( 'New Gift', 'supt' ),
				'edit_item'             => __( 'Edit Gift', 'supt' ),
				'update_item'           => __( 'Update Gift', 'supt' ),
				'view_item'             => __( 'View Gift', 'supt' ),
				'view_items'            => __( 'View Gifts', 'supt' ),
				'search_items'          => __( 'Search Gifts', 'supt' ),
				'not_found'             => __( 'Not found', 'supt' ),
				'not_found_in_trash'    => __( 'Not found in Trash', 'supt' ),
				'insert_into_item'      => __( 'Insert into Gift', 'supt' ),
				'uploaded_to_this_item' => __( 'Uploaded to this Gift', 'supt' ),
				'items_list'            => __( 'Gift list', 'supt' ),
				'items_list_navigation' => __( 'Gift list navigation', 'supt' ),
				'filter_items_list'     => __( 'Filter Gift list', 'supt' ),
			],
			'label'                 => __( 'Gift', 'supt' ),
			'menu_icon'             => 'dashicons-products', // See https://developer.wordpress.org/resource/dashicons
			'supports'              => [ 'title', 'revisions', 'thumbnail', 'post-formats'],
			'hierarchical'          => false,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 5,
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => false,
			'exclude_from_search'   => true,
			'publicly_queryable'    => true,
			'capability_type'       => 'post',
			'show_in_rest'          => true, // Enable block editor
			'rewrite'               => false,
			'show_in_graphql'       => true,
			'graphql_single_name'   => 'gift',
			'graphql_plural_name'   => 'gifts',
			'graphql_singular_type' => 'Gift',
			'graphql_plural_type'   => 'Gifts',
		]
	);
  }

  function getName() { return self::NAME; }
  function getGraphQLTypeName() { return self::GRAPHQL_TYPE_NAME; }
}

new Gift();
