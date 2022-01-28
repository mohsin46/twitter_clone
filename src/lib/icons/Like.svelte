<script lang="ts" >
    let fill : "#828282" | "#1DA1F2"  = "#828282"
    const handleMouseOver = () => {
        fill = "#1DA1F2"
    }
    const handleIconMouseOut = (e) => {
        fill = "#828282"
}
</script>

<div class="icon-hover" on:mouseover={handleMouseOver} on:mouseout={handleIconMouseOut} >
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="18" height="18" transform="translate(0.5)" fill="none"/>
    <path d="M9.50003 16.2285H9.48953C7.55228 16.1925 1.96252 11.142 1.96252 6.3585C1.96252 4.0605 3.85627 2.043 6.01477 2.043C7.73227 2.043 8.88727 3.228 9.49927 4.0905C10.1098 3.2295 11.2648 2.043 12.983 2.043C15.143 2.043 17.036 4.0605 17.036 6.35925C17.036 11.1412 11.4455 16.1917 9.50828 16.227H9.50003V16.2285ZM6.01552 3.16875C4.45552 3.16875 3.08827 4.65975 3.08827 6.36C3.08827 10.665 8.36378 15.057 9.50078 15.1035C10.6393 15.057 15.9133 10.6657 15.9133 6.36C15.9133 4.65975 14.546 3.16875 12.986 3.16875C11.09 3.16875 10.031 5.37075 10.022 5.3925C9.84953 5.814 9.15503 5.814 8.98178 5.3925C8.97128 5.37 7.91302 3.16875 6.01627 3.16875H6.01552Z" fill={fill} />
    </svg>
</div>

<style>
    .icon-hover{
		@apply p-2 rounded-full;
	}

	.icon-hover:hover{
		@apply bg-color-blue-light;
	}
</style>