var market=new Vue({
		el:'#market',
		data:{
			lists:[
			{
				id:1,
				name:"iphoneX",
				price:8000,
				count:1
			},
			{
				id:2,
				name:"iPad Pro",
				price:5888,
				count:1
			},
			{
				id:3,
				name:"MacBook Pro",
				price:21488,
				count:1
			}]
		},
		computed:{
			prices:function(){
				var prices=0;
				for (var i=this.lists.length - 1; i >= 0; i--) {
					prices+=this.lists[i].price*this.lists[i].count;
				}
				return prices.toString().replace(/(?=(\d{3})+$)/g,",");
			}
		},
		methods:{
			deleteItem:function(index){
				this.lists.splice(index,1);
			},
			deleteCount:function(index){
					this.lists[index].count--;
			},
			addCount:function(index){
				this.lists[index].count++;
			}
		}
	})