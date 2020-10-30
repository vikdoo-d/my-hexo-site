/**
 * vikdoo
 * date-addrlink
 * translate 
 */
'use strict';

var hexo = hexo || {};

hexo.extend.filter.register('before_post_render' , function(data)
{
    var log = this.log;
    if (data.layout == 'post')
    {
        let datelink;
        if ( !datelink )
        {
            var getDate = data.date;
            data.datelink = getDate.format(this.config.datelink.format);
        }
    }
    return data;
})