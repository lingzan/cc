<template>
    <section class="article-module">
        <ModuleHeader :actor="article" module-header-class="article-module-header" />
        <ArticleContent :article="article.content" />
    </section>
</template>

<script>
    import ModuleHeader from '../flow/moduleHeader'
    import ArticleContent from '../article/content'
    export default {
        name: 'article-module',
        props: {
            article: ''
        },
        components: { ModuleHeader, ArticleContent }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .article-module {
        padding: 14px 16px;
        margin-bottom: 10px;
        background: #fff;

        &:last-child {
            margin-bottom: 0;
        }
        
        &-header {
            // height: 20px;
            // line-height: 20px;
            //  font-size: pxToRem(13);
            margin-bottom: 9px;
        }
        
        &-content {
             font-size: pxToRem(14);
            line-height: 21px;
            color: rgba(0,0,0,.54)
        }
        
        &-img {
            width:100% ;
            height: 150px !important;
            margin-bottom: 10px;
        }

        &-avatar {
            float: left;
        }
        
        &-author {
            margin-left: 3px; 
        }

        &-title {
            margin:6px 0 8px;
             font-size: pxToRem(18);
            line-height: 23px;
            font-weight: 500;

            @include textOverflow(2)
        }

        &-content {
            margin-bottom: 14px;
            @include textOverflow(3)
        }

        
    }
</style>
