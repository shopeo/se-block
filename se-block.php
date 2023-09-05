<?php
/**
 * Plugin Name: SE Block
 * Plugin URI: https://wordpress.org/plugins/se-block
 * Description: SHOPEO Block Package
 * Author: Shopeo
 * Version: 0.0.1
 * Author URI: https://shopeo.cn
 * License: GPL2+
 * Text Domain: se-block
 * Domain Path: /languages
 * Requires at least: 5.9
 * Requires PHP: 5.6
 * @package se-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'se_block_activation' ) ) {
	function se_block_activation() {

	}
}

register_activation_hook( __FILE__, 'se_block_activation' );

if ( ! function_exists( 'se_block_deactivation' ) ) {
	function se_block_deactivation() {

	}
}

register_deactivation_hook( __FILE__, 'se_block_deactivation' );

if ( ! function_exists( 'se_block_load_textdomain' ) ) {
	function se_block_load_textdomain() {
		load_plugin_textdomain( 'se_block', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
	}
}

add_action( 'init', 'se_block_load_textdomain' );

if ( ! function_exists( 'se_block_register_blocks' ) ) {
	function se_block_register_blocks() {
		$blocks = array(
			'dynamic' => 'se_block_dynamic_block_test',
			'static'  => ''
		);

		foreach ( $blocks as $dir => $render_callback ) {
			$args = array();
			if ( ! empty( $render_callback ) ) {
				$args['render_callback'] = $render_callback;
			}
			register_block_type( __DIR__ . '/blocks/build/' . $dir, $args );
		}
	}
}

add_action( 'init', 'se_block_register_blocks' );

if ( ! function_exists( 'se_block_dynamic_block_test' ) ) {
	function se_block_dynamic_block_test( $attributes ) {

	}
}
