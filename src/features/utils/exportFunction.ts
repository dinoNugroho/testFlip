export function currency(curr: number) {
    return 'Rp. ' + Math.round(curr).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
};