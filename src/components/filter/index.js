import $ from "jquery";



const UpdateUrl = ({router}) => {
    var page_no = $('#page_no').val();
    var cat_id = $('#cat_id').val();
    var default_cat_id = $('#cat_id').attr('default_cat_id');
    var orderby = $('#orderby').val();
    var default_orderby = $('#orderby').attr('default_orderby');
    var posts_per_page = $('#posts_per_page').val();
    var default_posts_per_page = $('#posts_per_page').attr('default_posts_per_page');
    
    if(page_no != '1')
    {
        $('#page_no').attr('setURL','yes');
    }else{
        $('#page_no').attr('setURL','no');
    }
    if(cat_id != default_cat_id)
    {
        $('#cat_id').attr('setURL','yes');
    }else{
        $('#cat_id').attr('setURL','no');
    }
    if(orderby != default_orderby)
    {
        $('#orderby').attr('setURL','yes');
        $('#id_per_page_select option[value="'+orderby+'"]').attr("selected",true);
    }else{
        $('#orderby').attr('setURL','no');
    }
    if(posts_per_page != default_posts_per_page)
    {
        $('#posts_per_page').attr('setURL','yes');
    }else{
        $('#posts_per_page').attr('setURL','no');
    }

    // price
    var range_min_price = $('#range_min_price').val();
    var min_price = $('#min_price').val();
    var range_max_price = $('#range_max_price').val();
    var max_price = $('#max_price').val();

    if((min_price == range_min_price) || (typeof min_price === "undefined"))
    {
        $('#min_price').attr('setURL','no');
    }else{
        $('#min_price').attr('setURL','yes');
    }
    if((max_price == range_max_price) || (typeof max_price === "undefined"))
    {
        $('#max_price').attr('setURL','no');
    }else{
        $('#max_price').attr('setURL','yes');
    }

    var newQuery = $('#shop_filter input[setURL!=no]').serialize();
   
    if(newQuery != '')
    {
        newQuery = "?" + newQuery;
    }
      var current_utl = router.asPath.split("?");
	  router.push(current_utl[0]+'/'+newQuery);
       
    //return newQuery;
    //console.log('newQuery',newQuery);  
}

export default UpdateUrl;