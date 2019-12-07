export default {
    methods: {
        imageUrl: function(path, fit = 'fill', focus = 'center', height = '300',width = '400') {
            var url = new URL('https:' + path)
            url.searchParams.set('fm', 'jpg')
            url.searchParams.append('fl', 'progressive')
            url.searchParams.set('f', focus)
            url.searchParams.set('fit', fit)
            url.searchParams.append('h', height)
            url.searchParams.append('w', width)


            return url.href
        },
    },
}