<template>
    <div class="tpl">
        <a :href="card.schemeUrl">
            <div class="name">
                <span class="ava">
                    <img :src="card.avatar">
                </span>
                <span>{{card.nickname}}</span>
            </div>
            <div class="title">{{card.title}}</div>
            <div class="pic">
                <img :src="card.picUrl"/>
            </div>
            <div class="rcount">
                <i class="icon"></i>
                <span>{{(card.readCount/1000).toFixed(1)}}k人看过</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props:{
        card:Object
    }
    
}
</script>

<style lang="stylus" scoped>

.tpl{
    width 100%
    height 6.74rem
    padding 0.36rem 0.3rem
    margin 0.2rem 0;
    background-color #fff
    a{
        display block
        width 100%
        height 100%
        .name{
            height 0.56rem
            margin-bottom 0.24rem
            font-size: .28rem;
            color: #333;
            line-height: .36rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            span{
                display: inline-block;
                vertical-align: middle;
            }
            .ava{
                width: 0.56rem;
                height: 0.56rem;
                overflow: hidden;
                border-radius: 50%;
                box-sizing: border-box;
                border: .01rem solid #d9d9d9;
                margin-right: .12rem;
                font-size 0px
                img{
                    height 100%
                }
            }
        }
        .title{
            font-size: 0.36rem;
            color: #333;
            line-height: 0.52rem;
            margin: -0.08rem 0 0.16rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: PingFangSC-Regular;
        }
        .pic{
            width: 6.9rem;
            height: 3.76rem;
            position: relative;
            margin-bottom: .2rem;
            overflow: hidden;
            border-radius: .08rem;
            img{
                width 100%
                height 100%
            }
        }
        .rcount{
            font-size: 0.22rem;
            color: #999;
            line-height: 0.32rem;
            margin-top: 0.18rem;
            margin-bottom: -0.16rem;
            .icon{
                display: inline-block;
                width: 0.28rem;
                height: 0.2rem;
                vertical-align: middle;
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==') no-repeat;
                margin-right: 0.08rem;
                background-size:100% 100%;
            }
            span{
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
}

</style>
