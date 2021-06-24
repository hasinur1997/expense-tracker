<?php 
/**
* Plugin Name:       Expense Tracker
* Plugin URI:        https://example.com/plugins/the-basics/
* Description:       Handle the basics with this plugin.
* Version:           1.0
* Requires at least: 5.2
* Requires PHP:      7.2
* Author:            Hasinur Rahman
* Author URI:        https://author.example.com/
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain:       expense-tracker
* Domain Path:       /languages
*/

/**
 * Class Expetnse Tracker
 */
class Expense_Tracker {
    /**
     * Initialize
     */
    public function __construct() {
        $this->init_hooks();
    }

    /**
     * Get instance
     *
     * @return object | bool
     */
    public static function init() {
        static $instance = false;

        if ( ! $instance ) {
            $instance = new self();
        }

        return $instance;
    }

    /**
     * Init all required hooks
     *
     * @return void
     */
    public function init_hooks() {
        add_action('admin_menu', [ $this, 'add_admin_menu_page' ]);
        add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );
    }

    /**
     * Enqueue scripts
     *
     * @return void
     */
    public function admin_enqueue_scripts( $page ) {
        $assets = require_once dirname(__FILE__) . '/dist/js/main.asset.php';
        wp_enqueue_script( 'expense-tracker', plugins_url( 'dist/js/main.js', __FILE__ ), $assets['dependencies'], $assets['version'], true );
    }

    /**
     * Addd menu page
     *
     * @return void
     */
    public function add_admin_menu_page() {
        add_menu_page(
            __( 'Expense Tracker', 'expense-tracker'),
            __( 'Expense Tracker', 'expense-tracker' ),
            'manage_options',
            'expense-tracker',
            [ $this, 'expense_tracker' ]
        );
    }
    
    /**
     * View the expense tracker
     *
     * @return void
     */
    public function expense_tracker() {
        echo '<div class="wrap" id="expense-tracker"></div>';
    }
}

// Kick Off the plugin
Expense_Tracker::init();