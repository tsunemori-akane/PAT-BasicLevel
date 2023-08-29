/**
 * 给定字符串，只包含小写字母， 字符串长度5-30
 * 求：是否存在两个节点， 使得字符串被这两个节点分成三个部分
 * 每个部分ASCII码的值之和都相等，存在则输出这两个节点下标，否则输出-1 -1
 */

/**
 * 思路：定义两个数组， 先进行两次遍历 在两个数组中记录每个位置前缀和 和后缀和
 * 接着再进行一次遍历（双指针）找出分割点
 */