# Chuong 6: Mảng và vòng lặp cơ bản

- Khởi tạo mảng
  - Array literal: `[]`
  - Array constructor: `new Array()`
  - Nên sử dụng Array literal vì nó ngắn gọn hơn
  - Mảng có thể chứa nhiều kiểu dữ liệu khác nhau: `let arr = [1, 'a', true, [1, 2, 3], undefined, null, {}]`
  - index: của mảng bắt đầu từ 0
  - length: số phần tử của mảng
- Truy cập phần tử mảng, độ dài mảng
  - `arr[index]`
  - `arr.length`
- Các hàm thao tác với mảng
  - reverse(): Đảo ngược mảng, mảng gốc bị thay đổi
  - join(): Chuyển mảng thành chuỗi
  - indexOf(): Tìm vị trí của phần tử trong mảng
  - lastIndexOf(): Tìm vị trí cuối cùng của phần tử trong mảng
- Thêm, Xoá phần tử trong mảng
  - push(): Thêm phần tử vào cuối mảng
  - pop(): Xoá phần tử cuối mảng
  - unshift(): Thêm phần tử vào đầu mảng
  - shift(): Xoá phần tử đầu mảng
- Slice, Splice
  - slice(start, end): Cắt mảng từ vị trí start đến end, không thay đổi mảng gốc
  - splice(start, deleteCount, item1, item2, ...): Xoá deleteCount phần tử từ vị trí start, thêm item1, item2, ... vào vị trí start -> return mảng các phần tử bị xoá
- sort()
  - sort theo chuẩn Unicode, không phải sort theo số
  - Nếu muốn sort theo số, cần truyền hàm so sánh vào return (1, -1, 0)
  - Nếu muốn reverse thì có thể return -1, 1 ngược lại
- find(predicate): Tìm phần tử đầu tiên thỏa mãn điều kiện
  - Nếu không tìm thấy return undefined
- findIndex(predicate): Tìm vị trí phần tử đầu tiên

  - Nếu không tìm thấy return -1

- map(callback)
  - Duyệt qua từng phần tử, thực hiện hàm callback và trả về mảng mới
  - params của callback: value, index, array
- forEach(callback)
  - forEach tương tự như map nhưng không trả về mảng mới mà sẽ thao tác với từng phần tử của mảng để in ra hoặc thực hiện các hàm khác
- filter(predicate): Lọc ra các phần tử
- some(predicate): Kiểm tra có phần tử nào thoả predicate không
- every(predicate): Kiểm tra tất cả phần tử có thoả predicate không
- reduce(callback, initialValue): Tính toán dựa trên từng phần tử của mảng -> gom thành 1 giá trị

  - params của callback: accumulator, currentValue, currentIndex, array
  - initialValue: giá trị khởi tạo của accumulator

- By value và By reference

  - Primitive type: By value
  - Reference type: By reference
  - Khi thay đổi giá trị của biến thì giá trị của biến sẽ thay đổi theo
  - Khi thay đổi giá trị của mảng, object thì giá trị của biến không thay đổi, chỉ thay đổi giá trị của phần tử trong mảng, object

- JSON

  - JSON.stringify(obj): Chuyển object thành JSON
  - JSON.parse(json): Chuyển JSON thành object
  - Nên dùng JSON để lưu dữ liệu vào database, local storage để phân biệt string và object, array
  - Chú ý array.toString([1,2,3]) sẽ ra "1,2,3" trở thành 1 chuỗi
  - Sử dụng JSON.stringify để so sánh 2 object, array vì nếu không sẽ luôn false kể cả == hay ===

- Copy mảng
  - Cách 1: Sử dụng slice()
  - Cách 2: Sử dụng spread operator ...arr
