import React from 'react'
import "./Blog.css"
import { BsCalendar2Date} from 'react-icons/bs';

const Blog = () => {
  return (
    <div className='Blog'>
<div className='Blog-left'>
<h1 className='Blog-title'>Latest Blog</h1>
<div className='Blog-B1'>
<img className='Blog-image' src="https://magento2.magentech.com/themes/sm_medisine/pub/media/magefan_blog/blog-6.jpg" alt="" />
<span><p className='Blog-Date'><BsCalendar2Date className='Date-icon'/>2019-11-22</p>
 Sed ut perspiciatis unde omnis iste natus error sit voluptatem</span>
</div>
<div className='Blog-B1'>
<img className='Blog-image' src="https://magento2.magentech.com/themes/sm_medisine/pub/media/magefan_blog/blog-5.jpg" alt="" />
<span><p className='Blog-Date'><BsCalendar2Date className='Date-icon'/>2019-11-22</p>
Healthcare workers confronted anti-lockdown protesters.</span>
</div>


</div>



<div className='Blog-right'>

</div>



    </div>
  )
}

export default Blog