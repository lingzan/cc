<template>
    <section class="live-item" :class="liveClass">
        <div class="left">
            <Avatar avatar-size="54" :avatar-url="face"/>
        </div>
        <div class="right">
            <router-link :to="'/live/' + live.id">
                <h2 class="title">{{live.title}}</h2>
                <div class="author">{{live.guest_info.nickname}} | {{live.guest_info.company}} · {{live.guest_info.position}}</div>
                <div class="effect">
                    <Star :num="live.avg_score" />
                    <div class="effect-num">{{live.favorite_amount}} 人收藏 · {{live.payer_amount}} 人参加</div>
                </div>
            </router-link>
            <Operate>
                <span>{{live.begin_time}} </span>
                <router-link :to='"/c:"+classify.id' :key="classify.id" v-for="classify in live.classifys"><span>#{{classify.name}} </span></router-link>
            </Operate>
        </div>
    </section>
</template>
<script>
    import Avatar from '../avatar/user'
    import Star from '../widget/star'
    import Operate from '../common/operate'
    export default {
        name: 'live-item',
        props: {
            liveClass: '',
            live: ''
        },
        computed: {
            face: function () {
                console.log(this.live)
                return this.live.guest_info.face
            }
        },
        components: { Avatar, Star, Operate }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .live-item {
        background: #fff;
        padding: 15px 16px 17px;

        .left {
            float: left;
        }

        .right {
            margin-left: 64px;
            
            .title {
                 font-size: pxToRem(16);
                font-weight: 500;
                color: #444;

                @include textOverflow(1)
            }
            .author {
                height: 20px;
                margin-top: 5px;

                 font-size: pxToRem(14);
                color: #999;
                line-height: 20px;
                @include textOverflow(1)
            }
            .effect {
                height: 14px;
                margin: 8px 0 15px; 

                 font-size: pxToRem(13);
                line-height: 14px;
                color: #999;

                &-num {
                    display: inline-block;
                }
            }
        }
    }
</style>
