const contents = [
    {
        id: "1",
        title: "1",
        content: "1",
        author: "1",
        date: "First"
    },
    {
        id: "2",
        title: "2",
        content: "2",
        author: "2",
        date: "Second"
    },
    {
        id: "3",
        title: "3",
        content: "3",
        author: "3",
        date: "Third"
    },
    {
        id: "4",
        title: "4",
        content: "4",
        author: "4",
        date: "Fourth"
    },
    {
        id: "5",
        title: "5",
        content: "5",
        author: "5",
        date: "Fifth"
    }
]

export default class boardApi {
    static getAllContents() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], contents));
        });
    }

    static saveContent(content) {
        content = Object.assign({}, content);
        return new Promise((resolve, reject) => {
            content.id = parseInt(contents[contents.length - 1].id) + 1;
            content.date = new Date()
                                .toLocaleDateString()
                                .replace(/(\s*)/g,"")
                                .split('.')
                                .slice(0,3)
                                .join('/');
            contents.push(content);

            resolve(content);
        });
    }

    static updateContent(content) {
        content = Object.assign({}, content);
        return new Promise((resolve, reject) => {
            let targetIndex = contents.findIndex(a => a.id === content.id);

            content.date = new Date()
                                .toLocaleDateString()
                                .replace(/(\s*)/g,"")
                                .split('.')
                                .slice(0,3)
                                .join('/');

            resolve(content);
        });
    }

    static deleteContent(boardId) {
        return new Promise((resolve, reject) => {
            let targetIndex = contents.findIndex(a => a.id === boardId);
            contents.slice(targetIndex, targetIndex + 1);
            contents.map((v,i) => { v.id = String(i + 1); });
            resolve(contents);
        });
    }
}
