export default function formatDate(dateString) {
    if (!dateString) {
        return "-";
    }
    const d = new Date(dateString);
    if (isNaN(d.getTime())) {
        return "-";
    }
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${year}年${month}月${day}日`;
}
