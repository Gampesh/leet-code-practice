/*
 // In a classical approach
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}*/

// In a functional approach
function listNode(input) {
    this.data = input;
    this.next = null;
}

function createLinkList(input) {
    if (!input) return input;

    let head = new listNode(0); // head -> tail -> 0
    let tail = head;
    input.forEach(function (n) {
        tail.next = new listNode(n); // 0.next -> 1;
        tail = tail.next;
    });
    return head.next;
}

function printLinkListData(linkList) {
    if (!linkList) console.log(linkList);
    while (linkList) {
        console.log(linkList.data);
        linkList = linkList.next;
    }
}

function searchInLinkList(linkList, searchVal) {
    if (!linkList) return null;
    while (linkList) {
        if (searchVal === linkList.data) {
            return searchVal;
        }
        linkList = linkList.next;
    }
    return null;
}

function appendAtEndOfLinkList(linkList, node) {
    if (!linkList) return node;
    while (linkList.next) {
        linkList = linkList.next;
    }
    linkList.next = node;
}

let headNode = null, prevNode = null;

function reverseLinkListUsingRecursion(linkList) {
    if (!linkList) return null;

    reverseLinkListUsingRecursion(linkList.next);
    if (headNode === null) {
        headNode = linkList; // 7->null
        prevNode = linkList; // 7->null
    } else {
        // 6->7->null
        linkList.next = null; // 6->null;
        prevNode.next = linkList; // 7->6->null;
        prevNode = prevNode.next; // 6->null;
    }
}

function reverseLinkListWithoutRecursion(linkList) {
    if (!linkList) return null;

    let current = linkList;  // 1->2->3->4->5->6->null
    let prev = null;
    let next = null;

    while (current) {
        next = current.next; // 2->3->4->5->6->null | 2->3->4->5->6->null
        current.next = prev; // 1->null; | 2->1->null
        prev = current; // 1->null | 2->1->null
        current = next; // 2->3->4->5->6->null || 3->4->5->6->null
    }
    return prev;
}

let linkList = createLinkList([1, 2, 3, 4, 5, 6]);
console.log("******************* Linklist data are as below *************");
printLinkListData(linkList);
let returnVal = searchInLinkList(linkList, 7);
console.log("\n Searched for '7' within linklist and found: ", returnVal);
returnVal = searchInLinkList(linkList, 4);
console.log("\n Searched for '4'  within linklist and found: ", returnVal);

appendAtEndOfLinkList(linkList, new listNode(7));
console.log("\n******************* Linklist data are as below after appending at the end *************");
printLinkListData(linkList);

reverseLinkListUsingRecursion(linkList);
console.log("\n******************* Reversed Linklist are as below *************");
printLinkListData(headNode);

let linkList1 = createLinkList([1, 2, 3, 4, 5, 6]);
console.log("******************* Linklist data are as below *************");
printLinkListData(linkList1);
let reversedLinkedList = reverseLinkListWithoutRecursion(linkList1);
console.log("******************* Reverse LinkList Without Recursion data are as below *************");
printLinkListData(reversedLinkedList);

// console.log("\n******************* Reversed Linklist are as below *************");
// printLinkListData(headNode);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*function creatLinkListFromArray(listData) {
    let head = new Node(0);
    let tail = head;
    for (let i = 0; i < listData.length; i++) {
        tail.next = new Node(listData[i]);
        tail = tail.next;
    }
    return head.next;
}*/

/*function searchInLinkList() {
    while (linkList) {
        linkList = linkList.next;
        console.log(linkList.data);
    }
}*/

function printLinkList(linkList, searchValue = null) {
    while (linkList) {
        console.log(linkList.data);
        linkList = linkList.next;
    }
}

// let head = creatLinkListFromArray([1, 2, 3, 4, 5]);
// printLinkList(head);
/*
// console.log(head);
printLinkList(head, 4);
console.log("===============");

function appendToLinkList(linkList, node) {
    if (!linkList) {
        return node;
    }
    let tailNode = linkList;
    while (tailNode.next) {
        tailNode = tailNode.next;
    }
    tailNode.next = node;
    return linkList
}

// appendToLinkList(head, new Node(6));
const newList = appendToLinkList(null, new Node(6));

printLinkList(newList, 4);*/

// let listData = [1,2,3,4,5]; // input

/*function reverseLinkList(linkList) {
    if (!linkList) {
        return null;
    }
    reverseLinkList(linkList.next);
    if (headNode == null) {
        headNode = linkList;
        preNode = linkList;
    } else {
        // previousNode => 5 -> null
        // linkedList => 4 -> 5
        linkList.next = null; // linkedList => 4 -> null
        preNode.next = linkList; // previousNode => 5 -> 4 -> null, headNode => 5 -> 4 -> null
        preNode = preNode.next; // previousNode => 4 -> null
    }

}*/

/*let headNode = null; let preNode = null;
reverseLinkList(head);
console.log("======   reverseLinkList   =========");
printLinkList(headNode)*/
;


