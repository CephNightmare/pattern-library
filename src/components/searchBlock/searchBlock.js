export default {
    title: 'searchBlock',
    data: function() {
        return {
            submitSearch: false
        }
    },
    methods: {
        executeSearchFunctionality: function () {
            if (this.submitSearch) {
                window.location.href = "/search?s=" + document.getElementById("searchBlockInput").value;
            } else {
                document.getElementById("searchBlockInput").focus();
            }
        },
        determineSearchSubmit: function () {
            this.submitSearch = document.getElementById("searchBlockInput").value.length > 2;
        },
    }
}