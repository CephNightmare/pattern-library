export default {
    name: 'copyToClipboard',
    props: {
        buttonTitle: "",
        align: ""
    },
    methods: {
        copyToClipboard: function (event) {
            let copyText = event.currentTarget.nextElementSibling;
            console.log(copyText);
            copyText.select();
            document.execCommand("Copy");
            this.$emit('toggleMessage', "Copied to clipboard!");
        }
    }
}

