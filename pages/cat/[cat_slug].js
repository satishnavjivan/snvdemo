/**
 * Internal Dependencies.
 */
 import Products from '../../src/components/products';
 import { HEADER_FOOTER_ENDPOINT,SHOP_FILTER_ENDPOINT } from '../../src/utils/constants/endpoints';
 import isEmpty from '@/src/validator/is-empty';
 /**
  * External Dependencies.
  */
 import axios from 'axios';
 import Layout from '../../src/components/layout';
 import { useRouter } from "next/router";
 import $ from "jquery";
 import UpdateUrl from "../../src/components/filter";
 import { GetServerSideProps } from "next";


 const InputClicl = () =>
    {
        console.log($("#range_max_price").val());
        UpdateUrl();
         //console.log('object1',get_query());
    }
     
 function get_query(){
        var url = document.location.href;
        var qs = url.substring(url.indexOf('?') + 1).split('&');
        for(var i = 0, result = {}; i < qs.length; i++){
            qs[i] = qs[i].split('=');
            result[qs[i][0]] = decodeURIComponent(qs[i][1]);
        }
        return result;
    }
 export default function cat_slug({ headerFooter, products, params ,found_posts}) {
    //console.log('params',params);
    //const router = useRouter();
    //const cat_slug = router.query.cat_slug;
    //const { asPath } = useRouter();
    //console.log('asPath',asPath);
    //console.log('products',products);
    //console.log('found_posts',found_posts);
    
    
    if(isEmpty(products))
    {
        return(
            <Layout headerFooter={headerFooter || {}}>
                Data Not found
            </Layout>
        )
    }else{
        return (
            <Layout headerFooter={headerFooter || {}}>
                <a onClick={InputClicl}>Go Cat </a>
                <Products products={products} params={params}/>
                
            </Layout>
        )
    }
    
 }


export async function getServerSideProps(context){
    const { data: headerFooterData } = await axios.get( HEADER_FOOTER_ENDPOINT );
   // let payload = {cat_slug:'bathroom-basins', posts_per_page : posts_per_page };
    const { data: products } = await axios.post( SHOP_FILTER_ENDPOINT,context.query );
    //const { data: found_posts } = await axios.post( SHOP_FILTER_ENDPOINT,context.query );

    // In this example, we might call a database or an API with given ID from the query parameters
    // I'll call a fake API to get the players name from a fake database
    
  
    // Return the ID to the component
    return {
        props: {
            headerFooter: headerFooterData?.data ?? {},
            products: products.products ?? {},
            //found_posts: found_posts.found_posts ?? {},
            params: context?.query ?? {},
        },
    };
  };
  
 

