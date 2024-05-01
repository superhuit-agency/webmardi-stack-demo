<?php

namespace SUPT\Taxonomies;

use SUPT\Taxonomies\Taxonomy;
use Gift;

class GiftCategory extends Taxonomy {

	const NAME = 'gift_category';
	const PLURAL_NAME = 'gift_categories';
	const WHERE_ARG = 'giftCategoryIn';

	/**
	 * Hook into WP actions & filter
	 */
	function __construct() {
		parent::__construct();

		add_action( 'init', [ $this, 'register' ] );
	}

	function getName() { return self::NAME; }
	function getPluralName() { return self::PLURAL_NAME; }
	function getWhereArg() { return self::WHERE_ARG; }
	function getConnectedGraphQLTypeName() { return Gift::GRAPHQL_TYPE_NAME; }

	/**
	 * Register the Taxonomy
	 */
	function register() {
		$args = [
			'labels' => [
				'name'                       => _x( 'Category', 'Taxonomy General Name', 'supt' ),
				'singular_name'              => _x( 'Category', 'Taxonomy Singular Name', 'supt' ),
				'menu_name'                  => __( 'Categories', 'supt' ),
				'all_items'                  => __( 'All Categories', 'supt' ),
				'parent_item'                => __( 'Parent Category', 'supt' ),
				'parent_item_colon'          => __( 'Parent Category:', 'supt' ),
				'new_item_name'              => __( 'New Category Name', 'supt' ),
				'add_new_item'               => __( 'Add New Category', 'supt' ),
				'edit_item'                  => __( 'Edit Category', 'supt' ),
				'update_item'                => __( 'Update Category', 'supt' ),
				'view_item'                  => __( 'View Category', 'supt' ),
				'separate_items_with_commas' => __( 'Separate Categories with commas', 'supt' ),
				'add_or_remove_items'        => __( 'Add or remove Categories', 'supt' ),
				'choose_from_most_used'      => __( 'Choose from the most used', 'supt' ),
				'popular_items'              => __( 'Popular Categories', 'supt' ),
				'search_items'               => __( 'Search Categories', 'supt' ),
				'not_found'                  => __( 'Not Found', 'supt' ),
				'no_terms'                   => __( 'No Categories', 'supt' ),
				'items_list'                 => __( 'Category list', 'supt' ),
				'items_list_navigation'      => __( 'Category list navigation', 'supt' ),
			],
			'hierarchical'       => false,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_admin_column'  => true,
			'show_in_nav_menus'  => false,
			'show_tagcloud'      => false,
			'show_in_menu'       => true,
			'show_in_rest'       => true,

			'show_in_graphql'     => true,
			'graphql_single_name' => 'GiftCategory',
			'graphql_plural_name' => 'GiftCategories'
		];

		register_taxonomy( self::NAME, Gift::NAME, $args );
	}
}

new GiftCategory();
