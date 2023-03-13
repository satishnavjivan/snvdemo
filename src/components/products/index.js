import { isArray, isEmpty } from 'lodash';
import Product from './product';
import styles from '@/styles/Home.module.css'
import $ from "jquery";
import UpdateUrl from "../../../src/components/filter";
import { useRouter } from "next/router";
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

	

const Products = ({ products ,params}) => {
	const router = useRouter();
	
	if ( isEmpty( products ) || !isArray( products ) ) {
		return null;
	}

	
	const handleChange_Per_page = () =>
    {
        //$("#posts_per_page").val($("#id_per_page_select").val());
        $("#orderby").val($("#id_orderby_select").val());

	  	UpdateUrl({router});
	   
    }
	const handleChange_reset_form = () => {
		$('#shop_filter').trigger("reset");
		$('#page_no').val('1');
	
		// set order
		$('#orderby').val('menu_order');
		$(".orderby_select").val('menu_order');
	
		//// set per page
		$('#posts_per_page').val(24);
		$(".per_page_select").val('24');
	
		if($('#current_page_term_name').val() == 'product_cat')
		{
			$('#cat_id').val($('#current_page_term_id').val());
		}else{
			$('#cat_id').val('-1');
		}
		
		$('#min_price').val($('#range_min_price').val());
		$('#max_price').val($('#range_max_price').val());
		$(".shop_filter_ajax_click_fun").prop( "checked", false );
	
		// acf field search 
		$('#acf_text_field input').val('');
		UpdateUrl({router});
	
	}
	const per_page_list = [24,36,48];
	const orderby_list = [
		{key : "menu_order", val: "Default sorting"},
		{key : "popularity", val: "Sort by popularity"},
		{key : "rating", val: "Sort by average rating"},
		{key : "date", val: "Sort by latest"},
		{key : "price", val: "Sort by price: low to high"},
		{key : "price-desc", val: "Sort by price: high to low"}
	  ];
	
	   // Here we use item offsets; we could also use page offsets
		// following the API or data you're working with.
		const [itemOffset, setItemOffset] = useState(0)
		const [itemsPerPage, setItemsPerPage] = useState(24)

		// Simulate fetching items from another resources.
		// (This could be items from props; or items loaded in a local state
		// from an API endpoint with useEffect and useState)
		const endOffset = parseInt(itemOffset) + parseInt(itemsPerPage);
		//console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		const currentItems = products.slice(itemOffset, endOffset);
		const pageCount = Math.ceil(products.length / itemsPerPage);

		// Invoke when user click to request another page.
		const handlePageClick = (event) => {
			const newOffset = (event.selected * itemsPerPage) % products.length;
			console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
			);
			setItemOffset(newOffset);
		};

		
		const handlePerPageClick = event => {
			setItemOffset(0);
			setItemsPerPage(event.target.value);
		  };
		  //console.log('currentItems',currentItems);
		  //console.log('newOffset',itemOffset);
	return (
		<>
		<div className='main_filter'>
		<div className="flex items-center justify-between flex-wrap container mx-auto">
					<select  onChange={handlePerPageClick} name='per_page'>
						{per_page_list.map(per_page_no=>(
							<option key={per_page_no} value={per_page_no}>{per_page_no}</option> 
						))}
					</select>
					
					<select value={router.query.orderby  ?? {}} id='id_orderby_select' onChange={handleChange_Per_page} className="orderby_select" name='orderby'>
						{orderby_list.map(orderby_val=>(
							<option key={orderby_val.key} value={orderby_val.key}>{orderby_val.val}</option>
						))}
							
					</select>
		</div>
		<div className={styles.row}>
			<div className={styles.left_side_bar}>
				
			<form id="shop_filter" shop-form="1" response_data_sidebar="">
				<div className="reset_form" onClick={handleChange_reset_form}> Clear All </div>
					
					{ /* <!-- default field -->*/}
				<input type="hidden" setURL="no" name="range_min_price" value="1" id="range_min_price"></input>
				<input type="hidden" setURL="no" name="range_max_price" value="2501" id="range_max_price"></input>
				<input type="hidden" setURL="no" name="page_no" value="1" id="page_no"></input>
				<input type="hidden" setURL="no" name="cat_id" value="-1" default_cat_id="-1" id="cat_id"></input>

				{ /*<!-- current page --> */ }
				<input type="hidden" setURL="no" name="current_page_product_tag_slug" value="-1" id="current_page_product_tag_slug"></input>
				<input type="hidden" setURL="no" name="current_page_term_name" value="-1" id="current_page_term_name"></input>
				<input type="hidden" setURL="no" name="current_page_term_id" value="-1" id="current_page_term_id"></input>
				<input type="hidden" setURL="no" name="current_page_main_cat_id" value="0" id="current_page_main_cat_id"></input>
				<input type="hidden" setURL="no" name="current_page_s" value="" id="current_page_s"></input>
				<input type="hidden" setURL="no" name="page_name" value="" id="page_name"></input>

				{ /*<!-- order and per page field -->*/}
				<input type="hidden" setURL="no" name="product_ids" value="-1" id="product_ids"></input>
				<input type="hidden" setURL="no" name="orderby" value="menu_order" default_orderby="menu_order" id="orderby"></input>
				<input type="hidden" setURL="no" name="posts_per_page" value="24" default_posts_per_page="24" id="posts_per_page"></input>

			</form>
			
			</div>
			<div id="product_data" className={styles.product_filter_right+ " flex flex-wrap -mx-3 overflow-hidden product-filter-right "}>
				{ currentItems.length ? currentItems.map( product => {
					return (
						<Product key={ product?.id } product={product} />
					)
				} ) : null }
			</div>
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
			/>
		</div>
		</div>
		</>
	)
}

export default Products;
